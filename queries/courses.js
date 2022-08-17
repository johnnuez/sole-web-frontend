import qs from 'qs'

export const openCoursesQueryCreator = (limit) => {
  return qs.stringify(
    {
      populate: '*',
      sort: ['startDate:desc', 'title'],
      ...(limit && {
        pagination: {
          start: 0,
          limit,
        },
      }),
      filters: {
        $or: [
          {
            inscriptionsOpen: {
              $eq: true,
            },
          },
          {
            onlyRecorded: {
              $eq: true,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  )
}

export const closedCoursesQueryCreator = (limit) => {
  return qs.stringify(
    {
      populate: '*',
      sort: ['title'],
      ...(limit && {
        pagination: {
          start: 0,
          limit,
        },
      }),
      filters: {
        $and: [
          {
            inscriptionsOpen: {
              $eq: false,
            },
          },
          {
            onlyRecorded: {
              $eq: false,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  )
}

export const singleCourseQueryCreator = (slug) => {
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
