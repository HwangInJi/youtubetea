import { FaYoutubeSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

import { FaLeaf } from "react-icons/fa";
import { RiVidicon2Line } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { RiSeedlingLine } from "react-icons/ri";
import { GiJasmine } from "react-icons/gi";
import { IoIosFlower } from "react-icons/io";
import { GiVanillaFlower } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { FaRegLemon } from "react-icons/fa6";
import { GiCottonFlower } from "react-icons/gi";

export const headerMenus = [
    {
        title: "추천영상",
        icon: <RiVidicon2Line />,
        src: "/search/tea추천"
    },
    {
        title: "추천레시피",
        icon: <FaClipboardList />,
        src: "/search/tea레시피"
    },
    {
        title: "녹차",
        icon: <FaLeaf />,
        src: "/search/녹차"
    },
    {
        title: "보리차",
        icon: <RiSeedlingLine />,
        src: "/search/보리차"
    },
    {
        title: "자스민차",
        icon: <GiJasmine />,
        src: "/search/자스민티"
    },
    {
        title: "루이보스차",
        icon: <GiVanillaFlower />,
        src: "/search/루이보스티"
    },
    {
        title: "페퍼민트차",
        icon: <IoIosFlower />,
        src: "/search/페퍼민트티"
    },
    {
        title: "얼그레이차",
        icon: <GiCottonFlower />,
        src: "/search/얼그레이티"
    },
    {
        title: "레몬차",
        icon: <FaRegLemon />,
        src: "/search/레몬티"
    },
    {
        title: "유자차",
        icon: <GiFruitBowl />,
        src: "/search/유자차"
    }
]

export const searchKeyword = [
    {
        title: "제주도Tea",
        src: "/search/제주도"
    },
    {
        title: "국산Tea",
        src: "/search/국산차"
    },
    {
        title: "수입Tea",
        src: "/search/수입차"
    },
    {
        title: "카페인",
        src: "/search/카페인"
    },
    {
        title: "디카페인",
        src: "/search/디카페인"
    }
]

export const snsLink = [
    {
        title: "youtube",
        url: "https://github.com/HwangInJi/class2024",
        icon: <FaYoutubeSquare />
    },
    {
        title: "website",
        url: "https://github.com/HwangInJi/class2024",
        icon: <CgWebsite />
    },
    {
        title: "github",
        url: "https://github.com/HwangInJi/class2024",
        icon: <IoLogoGithub />
    },
    {
        title: "instagram",
        url: "https://github.com/HwangInJi/class2024",
        icon: <FaInstagramSquare />
    }
]