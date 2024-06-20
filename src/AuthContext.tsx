import React, {
  createContext,
  useContext,
  useState,
} from "react";
type Mode = 'light' | 'dark';
interface DataContextInterface {
  mode: Mode;
  handleSetMode:()=>void;
}
const DataContext = createContext({} as DataContextInterface);
const AuthContext = ({ children }: { children: React.ReactElement }) => {
  const [mode, setMode] = useState<Mode>("dark");
  const handleSetMode = ()=>{
    if (mode==='dark') setMode('light');
    else setMode('dark');
  }
  const allValues: DataContextInterface = { mode, handleSetMode };
  return (
    <DataContext.Provider value={allValues}>{children}</DataContext.Provider>
  );
};

export default AuthContext;
export const useDataContext = () => useContext(DataContext);
