// These constants are replaced by Vite.  See the vite.defs.js file in the
// root directory where they are defined.  They are included as the define
// options in vite.config.js

export const version   = SITE_VERSION
export const date      = SITE_DATE
export const start     = '2018'
export const year      = date.match(/^(\d+)/)[1]
export const copyright = year === start ? year : `${start} - ${year}`

const site = {
  title:      'React One Louder',
  author:     'Andy Wardley',
  authorLink: 'https://github.com/abw',
  repository: 'https://github.com/abw/react-one-louder',
  badgerpower: true,
  basename:    import.meta.env.BASE_URL,
  version,
  date,
  copyright
}

export default site