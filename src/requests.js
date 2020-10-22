const api_key = `cd17ab7f4ed0e752370ee84d1a94b349`


const requests = {
    fetchTrendingNow: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,       //&sort_by=vote_count.desc
    fetchTopAction: `/discover/movie?api_key=${api_key}&with_genres=28&sort_by=revenue.desc&
                    primary_release_date.gte=2019-01-01&vote_count.gte=1000`,
    fetchTopDrama: `/discover/movie?api_key=${api_key}&with_genres=18
                    &sort_by=revenue.desc&primary_release_date.gte=2019-01-01&vote_count.gte=1000`,
    fetchTopComedy: `/discover/movie?api_key=${api_key}&with_genres=35&sort_by=revenue.desc
                        &primary_release_date.gte=2019-01-01&vote_count.gte=1000`,
    fetchTopDoc: `/discover/movie?api_key=${api_key}&with_genres=99
                    &sort_by=revenue.desc&primary_release_date.gte=2019-01-01&vote_count.gte=100`,
}

export default requests;