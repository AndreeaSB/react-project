import useLocalStorage from './useLocalStorage';
import './theme.css'

export default function DarkTheme() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  console.log(theme);

  return (
    <div className="light-dark-theme" data-theme={theme}>
      <div className="container">
        <p>Hello World! -_-</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
