import React from "react";

import { Footer } from "./styles";

const AppFooter: React.FC = () => (
    <Footer>
        <p>&copy; {new Date().getFullYear()}. Juristrove</p>
    </Footer>
)

export default AppFooter;