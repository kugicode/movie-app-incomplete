function SearchBar({ movie, setMovie }){
return (
    <>
    <input type="text" value={movie} onChange={(event) => {setMovie(event.target.value)}}/>
    </>
)
}

export default SearchBar;