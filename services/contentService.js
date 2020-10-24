
const contentServive = {

  fetchContentType: async (contentType, contentfulClient) => {
    const articleContentType = await contentfulClient.getContentType(contentType)
    if (articleContentType) return articleContentType
    console.error('Error getting article content type.')
  }

}

module.exports = contentServive
