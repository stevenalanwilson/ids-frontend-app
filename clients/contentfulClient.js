const contentfulClient = (config) => {
  return require('contentful').createClient({
    space: config.space,
    accessToken: config.accessToken
  })
}

module.exports = contentfulClient
