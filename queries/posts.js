import qs from 'qs'

export const postsQueryCreator = (limit) => {
  return qs.stringify(
    {
      populate: '*',
      ...(limit && {
        pagination: {
          start: 0,
          limit,
        },
      }),
      sort: ['publishedAt:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  )
}

export const singlePostQueryCreator = (slug) => {
  return qs.stringify(
    {
      populate: '*',
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )
}
