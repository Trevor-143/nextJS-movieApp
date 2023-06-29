import Image from "next/image"
import Styles from "../page.module.css"

export async function generateStaticProps() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    return res.results.map((movie) => {
        movieID: toString(movie.id)
    })
}

export default async function movieDetails({params}) {
    const { movieID } = params
    const imgPath = 'https://image.tmdb.org/t/p/original'
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    // console.log(res)

    return (
        <div className={Styles.movieDetails} >
            <h2> {res.original_title} Details</h2>
            <Image 
                src={imgPath+res.backdrop_path}
                alt={res.title}
                width={500}
                height={500}
                style={{ objectFit: 'cover', width: '100%'}}
                quality={50}
            />
            <h3> {res.release_date} </h3>
            <h5> {res.runtime} minutes </h5>
            <h2>Overview</h2>
            <p> {res.overview} </p>
            <h5> Cost: {res.budget} </h5>
        </div>
    )
}