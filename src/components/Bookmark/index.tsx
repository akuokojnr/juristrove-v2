import React, { useState, useContext } from "react";
import * as firebase from "firebase";

import Input from "components/Form/input";
import Button from "components/Button";

import { UserContext } from "utils/hooks/useFirebase";

interface BookmarkProps {
  hasSaved: React.SetStateAction<boolean>;
  title: string;
  slug: string;
  closeModal: () => void;
}

const Bookmark: React.FC<BookmarkProps> = ({
  hasSaved,
  title,
  slug,
  closeModal,
}) => {
  const { userRef } = useContext(UserContext);

  const [category, setCategory] = useState<string>("");

  const handleSubmit = async e => {
    e.preventDefault();

    let data = {
      title,
      slug,
      savedAt: new Date().toDateString(),
      category,
    };

    try {
      await userRef.update({
        savedCases: firebase.firestore.FieldValue.arrayUnion(data),
      });

      hasSaved(true);
      closeModal();
    } catch (err) {
      hasSaved(false);
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Category"
        name="category"
        value={category}
        handleChange={setCategory}
      />
      <Button type="submit" buttonText="Save case" />
    </form>
  );
};

export default Bookmark;
