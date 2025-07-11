import SongList from "../components/SongList/SongList";
import SongDetails from "../components/SongDetails/SongDetails";
import { SongProvider } from "@/context/SongContext";

const Home = () => {
    return (
        <>
            <SongProvider>
                <SongList>
                </SongList>
                
                <SongDetails>
                </SongDetails>
            </SongProvider>
        </>
    );
};

export default Home;