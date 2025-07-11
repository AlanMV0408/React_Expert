import SongList from "../components/SongList/SongList";
import SongDetails from "../components/SongDetails/SongDetails";
import { SongProvider } from "@/context/SongContext";

const Home = () => {
    return (
        <>
            <SongProvider>
                <SongList>
                    <SongDetails>
                        
                    </SongDetails>
                </SongList>
            </SongProvider>
        </>
    );
};

export default Home;