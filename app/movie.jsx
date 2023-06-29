import Image from "next/image"
import Link from "next/link"

export default function Movie({ title, id, poster_path, release_date }) {
    const imgPath = 'https://image.tmdb.org/t/p/original' 
    return(
        <div className="singleMovie">
            <Link href={`/${id}`}>
                <Image 
                    src={imgPath+poster_path} alt={title}
                    width={300}
                    height={400}
                    alt={title}
                    quality={50}
                    style={{objectFit: "cover", width: '100%'}}
                />
            </Link>
            <h3> {title} </h3>
            <h4> {release_date} </h4>
        </div>
    )
}