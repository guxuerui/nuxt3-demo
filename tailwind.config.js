import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

module.exports = {
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['carbon', 'twemoji']),
    }),
  ],
}
