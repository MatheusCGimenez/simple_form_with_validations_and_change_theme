import { createContext, ReactNode, useState } from "react";

interface IChangeThemeContext {
  theme: string;
  changeTheme: () => void;
}
export const ChangeThemeContext = createContext<
  IChangeThemeContext | undefined
>(undefined);

interface Props {
  children: ReactNode;
}

export const ChangeThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("white");

  const changeTheme = (): void => {
    setTheme((valor) => (valor === "white" ? "black" : "white"));
  };

  return (
    <ChangeThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ChangeThemeContext.Provider>
  );
};
