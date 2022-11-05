import { promises as fs } from 'fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/07-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: '07 Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/07-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: '07 Dark',
      }), null, 2)}\n`,
    ),

  ]))
  .catch(() => process.exit(1))
