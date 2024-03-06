import React, { useEffect } from "react";
import { auth, db, storage } from "../../../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const RegisterPoliceStations = () => {
  useEffect(() => {
    // Any initialization code you want to run on component mount
  }, []);

  const districtPlaces = [
    {
        placeId: "krl4XFu2Fq9V4Qoym2Pi",
        stationName: "Kochi PS",
        houseOfficer: "Kutten Pilla",
        address: "Kochi, Ernakulam",
        phone: 123456789,
        email: "kochips@gmail.com",
        password: "kochi@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "663GlFo2W0NSd6e0X2Qm",
        stationName: "Ambalavayal PS",
        houseOfficer: "Kutten Pilla",
        address: "Ambalavayal, Wayanad",
        phone: 123456789,
        email: "ambalavayalps@gmail.com",
        password: "ambalavayal@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "0iWOAYBcrNR9nZhdtLud",
        stationName: "Adoor PS",
        houseOfficer: "Kutten Pilla",
        address: "Adoor, Pathanamthitta",
        phone: 123456789,
        email: "adoorps@gmail.com",
        password: "adoor@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "0zukPv2teuhFzHt1edMI",
        stationName: "Koyilandy PS",
        houseOfficer: "Kutten Pilla",
        address: "Koyilandy, Kozhikode",
        phone: 123456789,
        email: "koyilandyps@gmail.com",
        password: "koyilandy@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "1WFW43RaYgvDG7TdBm",
        stationName: "Peerumade PS",
        houseOfficer: "Kutten Pilla",
        address: "Peerumade, Idukki",
        phone: 123456789,
        email: "peerumadeps@gmail.com",
        password: "peerumade@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "2JdeKgcn05d9e2jI5Y62",
        stationName: "Punalur PS",
        houseOfficer: "Kutten Pilla",
        address: "Punalur, Kollam",
        phone: 123456789,
        email: "punalurps@gmail.com",
        password: "punalur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "36S0p11Zb7nzrfUHUsaS",
        stationName: "Tirur PS",
        houseOfficer: "Kutten Pilla",
        address: "Tirur, Malappuram",
        phone: 123456789,
        email: "tirurps@gmail.com",
        password: "tirur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "37jsIbQ6dtrRF8lWPqsd",
        stationName: "Kattappana PS",
        houseOfficer: "Kutten Pilla",
        address: "Kattappana, Idukki",
        phone: 123456789,
        email: "kattappanaps@gmail.com",
        password: "kattappana@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "3K2pbes8ybgji0qqGflo",
        stationName: "Mananthavady PS",
        houseOfficer: "Kutten Pilla",
        address: "Mananthavady, Wayanad",
        phone: 123456789,
        email: "mananthavadyps@gmail.com",
        password: "mananthavady@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "4q9SJbQ2XDYwsqkrPAUu",
        stationName: "Kottarakkara PS",
        houseOfficer: "Kutten Pilla",
        address: "Kottarakkara, Kollam",
        phone: 123456789,
        email: "kottarakkaraps@gmail.com",
        password: "kottarakkara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "5wLCV5VA5ivq7N0zw6Ca",
        stationName: "Uppala PS",
        houseOfficer: "Kutten Pilla",
        address: "Uppala, Kasaragod",
        phone: 123456789,
        email: "uppalaps@gmail.com",
        password: "uppala@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "6fl0p9WzbRRzdL5iutyz",
        stationName: "Iritty PS",
        houseOfficer: "Kutten Pilla",
        address: "Iritty, Kannur",
        phone: 123456789,
        email: "irittyps@gmail.com",
        password: "iritty@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "76UWaCt572PGPIe0h2DS",
        stationName: "Kottayam City PS",
        houseOfficer: "Kutten Pilla",
        address: "Kottayam City, Kottayam",
        phone: 123456789,
        email: "kottayamcityps@gmail.com",
        password: "kottayamcity@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "87dqF3osOzC5deihLYJJ",
        stationName: "Pandalam PS",
        houseOfficer: "Kutten Pilla",
        address: "Pandalam, Pathanamthitta",
        phone: 123456789,
        email: "pandalamps@gmail.com",
        password: "pandalam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "8w7zFJc9wmlIH4ZQhy5s",
        stationName: "Ramanattukara PS",
        houseOfficer: "Kutten Pilla",
        address: "Ramanattukara, Kozhikode",
        phone: 123456789,
        email: "ramanattukaraps@gmail.com",
        password: "ramanattukara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "9fD5RpjfMYcA2uX2RnOh",
        stationName: "Vadakara PS",
        houseOfficer: "Kutten Pilla",
        address: "Vadakara, Kozhikode",
        phone: 123456789,
        email: "vadakaraps@gmail.com",
        password: "vadakara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "A1b9EsNWgbY93ZJcVu",
        stationName: "Mavelikara PS",
        houseOfficer: "Kutten Pilla",
        address: "Mavelikara, Alappuzha",
        phone: 123456789,
        email: "mavelikaraps@gmail.com",
        password: "mavelikara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "az4vjXnNrghq8FHzMj8G",
        stationName: "Vandiperiyar PS",
        houseOfficer: "Kutten Pilla",
        address: "Vandiperiyar, Idukki",
        phone: 123456789,
        email: "vandiperiyarps@gmail.com",
        password: "vandiperiyar@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "BqYd70hw1U80GJhYQeAQ",
        stationName: "Muvattupuzha PS",
        houseOfficer: "Kutten Pilla",
        address: "Muvattupuzha, Ernakulam",
        phone: 123456789,
        email: "muvattupuzhaps@gmail.com",
        password: "muvattupuzha@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "cGqdbFvuwzb0RiXSSGtP",
        stationName: "Thiruvalla PS",
        houseOfficer: "Kutten Pilla",
        address: "Thiruvalla, Pathanamthitta",
        phone: 123456789,
        email: "thiruvallaps@gmail.com",
        password: "thiruvalla@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "D3iUXB4H6HPcAf1y6Jjz",
        stationName: "Nedumangad PS",
        houseOfficer: "Kutten Pilla",
        address: "Nedumangad, Thiruvananthapuram",
        phone: 123456789,
        email: "nedumangadps@gmail.com",
        password: "nedumangad@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "dMPvHXVQaXfzQ5XVJLmB",
        stationName: "Nenmara PS",
        houseOfficer: "Kutten Pilla",
        address: "Nenmara, Palakkad",
        phone: 123456789,
        email: "nenmaraps@gmail.com",
        password: "nenmara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "dXhdVsNN8mXEdz8Ww1PA",
        stationName: "Thrissur East PS",
        houseOfficer: "Kutten Pilla",
        address: "Thrissur East, Thrissur",
        phone: 123456789,
        email: "thrissureastps@gmail.com",
        password: "thrissureast@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "eAfc7wNVaHnAWsONL9Q4",
        stationName: "Vadasserikara PS",
        houseOfficer: "Kutten Pilla",
        address: "Vadasserikara, Pathanamthitta",
        phone: 123456789,
        email: "vadasserikaraps@gmail.com",
        password: "vadasserikara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "EiCwbgVfxqz0lWh4rN7J",
        stationName: "Pattambi PS",
        houseOfficer: "Kutten Pilla",
        address: "Pattambi, Palakkad",
        phone: 123456789,
        email: "pattambips@gmail.com",
        password: "pattambi@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "fRfAFq7kHwamD7B7jIuM",
        stationName: "Cherthala PS",
        houseOfficer: "Kutten Pilla",
        address: "Cherthala, Alappuzha",
        phone: 123456789,
        email: "cherthalaps@gmail.com",
        password: "cherthala@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "FwjzFXm5ivR7qAl3Pr7a",
        stationName: "Mananthala PS",
        houseOfficer: "Kutten Pilla",
        address: "Mananthala, Thiruvananthapuram",
        phone: 123456789,
        email: "mananthalaps@gmail.com",
        password: "mananthala@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "gLOmcR00I5A0rjJd0AJW",
        stationName: "Varkala PS",
        houseOfficer: "Kutten Pilla",
        address: "Varkala, Thiruvananthapuram",
        phone: 123456789,
        email: "varkalaps@gmail.com",
        password: "varkala@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "H5XZ0ndnqKcvyL9SHyHW",
        stationName: "Manjeswaram PS",
        houseOfficer: "Kutten Pilla",
        address: "Manjeswaram, Kasaragod",
        phone: 123456789,
        email: "manjeswaramps@gmail.com",
        password: "manjeswaram@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "HecZXX2MwpuH4Gwdq3iN",
        stationName: "Vaikom PS",
        houseOfficer: "Kutten Pilla",
        address: "Vaikom, Kottayam",
        phone: 123456789,
        email: "vaikomps@gmail.com",
        password: "vaikom@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "hk4jVi53DswvqwOehC4e",
        stationName: "Mankada PS",
        houseOfficer: "Kutten Pilla",
        address: "Mankada, Malappuram",
        phone: 123456789,
        email: "mankadaps@gmail.com",
        password: "mankada@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "HWB8IZDyLmXbYr6c0M3b",
        stationName: "Vythiri PS",
        houseOfficer: "Kutten Pilla",
        address: "Vythiri, Wayanad",
        phone: 123456789,
        email: "vythirips@gmail.com",
        password: "vythiri@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "iHnmLBlAmD4y0cMgkm1s",
        stationName: "Aluva PS",
        houseOfficer: "Kutten Pilla",
        address: "Aluva, Ernakulam",
        phone: 123456789,
        email: "aluvaps@gmail.com",
        password: "aluva@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "IQG4WjJNUiW7sCt6G2sT",
        stationName: "Sulthan Bathery PS",
        houseOfficer: "Kutten Pilla",
        address: "Sulthan Bathery, Wayanad",
        phone: 123456789,
        email: "sulthanbatheryps@gmail.com",
        password: "sulthanbathery@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "J05POAgF5e3B0EohZTnp",
        stationName: "Kundara PS",
        houseOfficer: "Kutten Pilla",
        address: "Kundara, Kollam",
        phone: 123456789,
        email: "kundaraps@gmail.com",
        password: "kundara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "JcE0e6XWOk0zq49AYcLq",
        stationName: "Piravom PS",
        houseOfficer: "Kutten Pilla",
        address: "Piravom, Ernakulam",
        phone: 123456789,
        email: "piravomps@gmail.com",
        password: "piravom@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "JMmXqPF0cB2rWl9i6MdT",
        stationName: "Perumbavoor PS",
        houseOfficer: "Kutten Pilla",
        address: "Perumbavoor, Ernakulam",
        phone: 123456789,
        email: "perumbavoorps@gmail.com",
        password: "perumbavoor@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "jVLHrJ1MkS68lfhMF7Hf",
        stationName: "Karunagappally PS",
        houseOfficer: "Kutten Pilla",
        address: "Karunagappally, Kollam",
        phone: 123456789,
        email: "karunagappallyps@gmail.com",
        password: "karunagappally@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "k44I0G1HdWkPBgcT0rBZ",
        stationName: "Kunnamkulam PS",
        houseOfficer: "Kutten Pilla",
        address: "Kunnamkulam, Thrissur",
        phone: 123456789,
        email: "kunnamkulamps@gmail.com",
        password: "kunnamkulam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "K5RbmXtnpzHPyv9qjcrX",
        stationName: "Changanassery PS",
        houseOfficer: "Kutten Pilla",
        address: "Changanassery, Kottayam",
        phone: 123456789,
        email: "changanasseryps@gmail.com",
        password: "changanassery@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "kgXzNq5Uj3BBkL1EBQwW",
        stationName: "Kunnamangalam PS",
        houseOfficer: "Kutten Pilla",
        address: "Kunnamangalam, Kozhikode",
        phone: 123456789,
        email: "kunnamangalamps@gmail.com",
        password: "kunnamangalam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "KoFQ7FQtfUKo0wFToPrp",
        stationName: "Malappuram Town PS",
        houseOfficer: "Kutten Pilla",
        address: "Malappuram Town, Malappuram",
        phone: 123456789,
        email: "malappuramtownps@gmail.com",
        password: "malappuramtown@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "l0lCnozq5m7vWOrU40Yv",
        stationName: "Chelakkara PS",
        houseOfficer: "Kutten Pilla",
        address: "Chelakkara, Thrissur",
        phone: 123456789,
        email: "chelakkaraps@gmail.com",
        password: "chelakkara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "LQRFnftpgJME94uUs0rB",
        stationName: "Pala PS",
        houseOfficer: "Kutten Pilla",
        address: "Pala, Kottayam",
        phone: 123456789,
        email: "palaps@gmail.com",
        password: "pala@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "lrAe8eG3HchpQFmXsNeT",
        stationName: "Palakkad Town PS",
        houseOfficer: "Kutten Pilla",
        address: "Palakkad Town, Palakkad",
        phone: 123456789,
        email: "palakkadtownps@gmail.com",
        password: "palakkadtown@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "LsOlSmXGJQ1Xl0bzWwck",
        stationName: "Neyyattinkara PS",
        houseOfficer: "Kutten Pilla",
        address: "Neyyattinkara, Thiruvananthapuram",
        phone: 123456789,
        email: "neyyattinkaraps@gmail.com",
        password: "neyyattinkara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "N4FsZOhQVxXUfVr4Z8ne",
        stationName: "Palai PS",
        houseOfficer: "Kutten Pilla",
        address: "Palai, Kottayam",
        phone: 123456789,
        email: "palaips@gmail.com",
        password: "palai@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "NGYDQPlm3ML6EC4bq1P6",
        stationName: "Nilambur PS",
        houseOfficer: "Kutten Pilla",
        address: "Nilambur, Malappuram",
        phone: 123456789,
        email: "nilamburps@gmail.com",
        password: "nilambur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "NhGBcr23pEtk2fiYBKK8",
        stationName: "Perumbadappu PS",
        houseOfficer: "Kutten Pilla",
        address: "Perumbadappu, Kottayam",
        phone: 123456789,
        email: "perumbadappups@gmail.com",
        password: "perumbadappu@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "O3X0oNSWplFus4QWrG4Z",
        stationName: "Kanjirappally PS",
        houseOfficer: "Kutten Pilla",
        address: "Kanjirappally, Kottayam",
        phone: 123456789,
        email: "kanjirappallyps@gmail.com",
        password: "kanjirappally@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "o9dKur43RgkNF8CM6I8p",
        stationName: "Peravoor PS",
        houseOfficer: "Kutten Pilla",
        address: "Peravoor, Kannur",
        phone: 123456789,
        email: "peravoorps@gmail.com",
        password: "peravoor@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "oqht6XWzowWJhGakltYs",
        stationName: "Chalakudy PS",
        houseOfficer: "Kutten Pilla",
        address: "Chalakudy, Thrissur",
        phone: 123456789,
        email: "chalakudy@gmail.com",
        password: "chalakudy@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "P9kXLRr2HATN0RDSZJQz",
        stationName: "Thodupuzha PS",
        houseOfficer: "Kutten Pilla",
        address: "Thodupuzha, Idukki",
        phone: 123456789,
        email: "thodupuzhaps@gmail.com",
        password: "thodupuzha@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "pK0ueJLRZJbY4KiNl6RZ",
        stationName: "Payyannur PS",
        houseOfficer: "Kutten Pilla",
        address: "Payyannur, Kannur",
        phone: 123456789,
        email: "payyannurps@gmail.com",
        password: "payyannur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "Q7K3i6Ht7wULeVYeSh7B",
        stationName: "Kalamassery PS",
        houseOfficer: "Kutten Pilla",
        address: "Kalamassery, Ernakulam",
        phone: 123456789,
        email: "kalamasseryps@gmail.com",
        password: "kalamassery@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "q7sS5kdrYB5HZ6BtBc4c",
        stationName: "Thalassery PS",
        houseOfficer: "Kutten Pilla",
        address: "Thalassery, Kannur",
        phone: 123456789,
        email: "thalasseryps@gmail.com",
        password: "thalassery@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "QegSdPwXedj0u8ej2V2I",
        stationName: "Kalpetta PS",
        houseOfficer: "Kutten Pilla",
        address: "Kalpetta, Wayanad",
        phone: 123456789,
        email: "kalpettaps@gmail.com",
        password: "kalpetta@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "QfMYa9r34HclhXpDp2Fj",
        stationName: "Pathanamthitta PS",
        houseOfficer: "Kutten Pilla",
        address: "Pathanamthitta, Pathanamthitta",
        phone: 123456789,
        email: "pathanamthittaps@gmail.com",
        password: "pathanamthitta@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "qymY3QZEx0Kg8eBlcJtD",
        stationName: "Kottakkal PS",
        houseOfficer: "Kutten Pilla",
        address: "Kottakkal, Malappuram",
        phone: 123456789,
        email: "kottakkalps@gmail.com",
        password: "kottakkal@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "R2T94Rb5NtfOJmhrzNmT",
        stationName: "Puthuppally PS",
        houseOfficer: "Kutten Pilla",
        address: "Puthuppally, Kottayam",
        phone: 123456789,
        email: "puthupallyps@gmail.com",
        password: "puthuppally@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "rI1ImUbLgfJ1vM8UyTzN",
        stationName: "Kottiyam PS",
        houseOfficer: "Kutten Pilla",
        address: "Kottiyam, Kollam",
        phone: 123456789,
        email: "kottiyamps@gmail.com",
        password: "kottiyam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "rNEoVrNdqYWp2fAFKkZx",
        stationName: "Kanjikkuzhy PS",
        houseOfficer: "Kutten Pilla",
        address: "Kanjikkuzhy, Alappuzha",
        phone: 123456789,
        email: "kanjikkuzhy@gmail.com",
        password: "kanjikkuzhy@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "rRcJJH4MXIqDCoY2uKry",
        stationName: "Vadakkencherry PS",
        houseOfficer: "Kutten Pilla",
        address: "Vadakkencherry, Palakkad",
        phone: 123456789,
        email: "vadakkencherry@gmail.com",
        password: "vadakkencherry@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "ru4E1GqU7uqFRl6NK8sF",
        stationName: "Mukkam PS",
        houseOfficer: "Kutten Pilla",
        address: "Mukkam, Kozhikode",
        phone: 123456789,
        email: "mukkam@gmail.com",
        password: "mukkam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "rYBb7Ei69e1LBYtAGPpp",
        stationName: "Thamarassery PS",
        houseOfficer: "Kutten Pilla",
        address: "Thamarassery, Kozhikode",
        phone: 123456789,
        email: "thamarasseryps@gmail.com",
        password: "thamarassery@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "SbjIRUbz59oJyGbrpUJI",
        stationName: "Thiruvanvandoor PS",
        houseOfficer: "Kutten Pilla",
        address: "Thiruvanvandoor, Alappuzha",
        phone: 123456789,
        email: "thiruvanvandoorps@gmail.com",
        password: "thiruvanvandoor@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "SiFtDGl7Y62J1x0exhsA",
        stationName: "Palode PS",
        houseOfficer: "Kutten Pilla",
        address: "Palode, Thiruvananthapuram",
        phone: 123456789,
        email: "palodeps@gmail.com",
        password: "palode@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "SsVv5LeIlMzYZPdXY7gj",
        stationName: "Thrikkakara PS",
        houseOfficer: "Kutten Pilla",
        address: "Thrikkakara, Ernakulam",
        phone: 123456789,
        email: "thrikkakaraps@gmail.com",
        password: "thrikkakara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "t2rQbiVXxLP8F6wPq6Hd",
        stationName: "Cherpu PS",
        houseOfficer: "Kutten Pilla",
        address: "Cherpu, Thrissur",
        phone: 123456789,
        email: "cherpups@gmail.com",
        password: "cherpu@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "T8X2ibKwhYqOK3Ac5TrI",
        stationName: "Thamarakulam PS",
        houseOfficer: "Kutten Pilla",
        address: "Thamarakulam, Alappuzha",
        phone: 123456789,
        email: "thamarakulam@gmail.com",
        password: "thamarakulam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "tKZu3hjtBNNQLq4zC6jY",
        stationName: "Kayamkulam PS",
        houseOfficer: "Kutten Pilla",
        address: "Kayamkulam, Alappuzha",
        phone: 123456789,
        email: "kayamkulamps@gmail.com",
        password: "kayamkulam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "Tq0ng8AcJm2r5X5DvWdM",
        stationName: "Kottakkal PS",
        houseOfficer: "Kutten Pilla",
        address: "Kottakkal, Malappuram",
        phone: 123456789,
        email: "kottakkalps@gmail.com",
        password: "kottakkal@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "TvX6yvO1kqIzQlSsoBFa",
        stationName: "Vandannoor PS",
        houseOfficer: "Kutten Pilla",
        address: "Vandannoor, Kollam",
        phone: 123456789,
        email: "vandannoorps@gmail.com",
        password: "vandannoor@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "U5tqXh0h7zRPt4IgYGdp",
        stationName: "Chengannur PS",
        houseOfficer: "Kutten Pilla",
        address: "Chengannur, Alappuzha",
        phone: 123456789,
        email: "chengannurps@gmail.com",
        password: "chengannur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "uB0BVoWEr3VmYQ3bb90D",
        stationName: "Vellarada PS",
        houseOfficer: "Kutten Pilla",
        address: "Vellarada, Thiruvananthapuram",
        phone: 123456789,
        email: "vellaradaps@gmail.com",
        password: "vellarada@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "UvHfGrdLl7JxSqrfQl6h",
        stationName: "Cherthala PS",
        houseOfficer: "Kutten Pilla",
        address: "Cherthala, Alappuzha",
        phone: 123456789,
        email: "cherthalaps@gmail.com",
        password: "cherthala@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "uyk52p2q5k1FQrEjj5mA",
        stationName: "Peringathur PS",
        houseOfficer: "Kutten Pilla",
        address: "Peringathur, Kannur",
        phone: 123456789,
        email: "peringathurps@gmail.com",
        password: "peringathur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "UZBXNYc21XgBcGl0vG1Y",
        stationName: "Kodungallur PS",
        houseOfficer: "Kutten Pilla",
        address: "Kodungallur, Thrissur",
        phone: 123456789,
        email: "kodungallurps@gmail.com",
        password: "kodungallur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "vGKReDgFhZFCNNpXqW8b",
        stationName: "Kottarakkara PS",
        houseOfficer: "Kutten Pilla",
        address: "Kottarakkara, Kollam",
        phone: 123456789,
        email: "kottarakkaraps@gmail.com",
        password: "kottarakkara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "vJA3WAh6Y7XbJgB7sy9J",
        stationName: "Muthalakkodam PS",
        houseOfficer: "Kutten Pilla",
        address: "Muthalakkodam, Idukki",
        phone: 123456789,
        email: "muthalakkodam@gmail.com",
        password: "muthalakkodam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "vW0rBhNn1KZxdtx2nKbm",
        stationName: "Vamanapuram PS",
        houseOfficer: "Kutten Pilla",
        address: "Vamanapuram, Thiruvananthapuram",
        phone: 123456789,
        email: "vamanapuramps@gmail.com",
        password: "vamanapuram@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "W8D0o2fAKoLT1uXqXKbC",
        stationName: "Punalur PS",
        houseOfficer: "Kutten Pilla",
        address: "Punalur, Kollam",
        phone: 123456789,
        email: "punalurps@gmail.com",
        password: "punalur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "w9vHsgWy4jj0s20fsFzB",
        stationName: "Vadasserikkara PS",
        houseOfficer: "Kutten Pilla",
        address: "Vadasserikkara, Pathanamthitta",
        phone: 123456789,
        email: "vadasserikaraps@gmail.com",
        password: "vadasserikara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "WlpGt8bgc5UwOAlVJW5v",
        stationName: "Pampady PS",
        houseOfficer: "Kutten Pilla",
        address: "Pampady, Kottayam",
        phone: 123456789,
        email: "pampadyps@gmail.com",
        password: "pampady@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "WzYcVsga0mJiobhLQWpM",
        stationName: "Kothamangalam PS",
        houseOfficer: "Kutten Pilla",
        address: "Kothamangalam, Ernakulam",
        phone: 123456789,
        email: "kothamangalam@gmail.com",
        password: "kothamangalam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "XaIaiASyqYtHKNgfhbKK",
        stationName: "Pathanapuram PS",
        houseOfficer: "Kutten Pilla",
        address: "Pathanapuram, Kollam",
        phone: 123456789,
        email: "pathanapuram@gmail.com",
        password: "pathanapuram@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "xKxFGwVEnjMHtgxQkC9V",
        stationName: "Thiruvalla East PS",
        houseOfficer: "Kutten Pilla",
        address: "Thiruvalla East, Pathanamthitta",
        phone: 123456789,
        email: "thiruvallaeastps@gmail.com",
        password: "thiruvallaeast@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "XnL0uFvp6kFv6PrIew9n",
        stationName: "Koduvally PS",
        houseOfficer: "Kutten Pilla",
        address: "Koduvally, Kozhikode",
        phone: 123456789,
        email: "koduvallyps@gmail.com",
        password: "koduvally@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "xuFHzYtF9h8cG7dWJzGC",
        stationName: "Poothotta PS",
        houseOfficer: "Kutten Pilla",
        address: "Poothotta, Ernakulam",
        phone: 123456789,
        email: "poothottaps@gmail.com",
        password: "poothotta@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "Y7eA1flM6GW7K2Mp0hx9",
        stationName: "Thiruvalla West PS",
        houseOfficer: "Kutten Pilla",
        address: "Thiruvalla West, Pathanamthitta",
        phone: 123456789,
        email: "thiruvallawestps@gmail.com",
        password: "thiruvallawest@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "Y8hNadnAbcZmR8aCdmJn",
        stationName: "Karunapuram PS",
        houseOfficer: "Kutten Pilla",
        address: "Karunapuram, Palakkad",
        phone: 123456789,
        email: "karunapuram@gmail.com",
        password: "karunapuram@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "ycQFTb4V2pDs3I6fX8t8",
        stationName: "Kuthuparamba PS",
        houseOfficer: "Kutten Pilla",
        address: "Kuthuparamba, Kannur",
        phone: 123456789,
        email: "kuthuparambaps@gmail.com",
        password: "kuthuparamba@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "YRlZqfYmLNFd0AB5U27y",
        stationName: "Mannarkkad PS",
        houseOfficer: "Kutten Pilla",
        address: "Mannarkkad, Palakkad",
        phone: 123456789,
        email: "mannarkkadps@gmail.com",
        password: "mannarkkad@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "z8JyTfXvA0kKk4AxrP5c",
        stationName: "Thiruvankulam PS",
        houseOfficer: "Kutten Pilla",
        address: "Thiruvankulam, Ernakulam",
        phone: 123456789,
        email: "thiruvankulamps@gmail.com",
        password: "thiruvankulam@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "zBEpIopL79ZFgEuP6oNa",
        stationName: "Thaliparamba PS",
        houseOfficer: "Kutten Pilla",
        address: "Thaliparamba, Kannur",
        phone: 123456789,
        email: "thaliparambaps@gmail.com",
        password: "thaliparamba@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "zfB1yGx4fWgvEFBiSsHt",
        stationName: "Puthenvelikkara PS",
        houseOfficer: "Kutten Pilla",
        address: "Puthenvelikkara, Ernakulam",
        phone: 123456789,
        email: "puthenvelikkaraps@gmail.com",
        password: "puthenvelikkara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "ZGJniGNX5DroJQRtWHEh",
        stationName: "Kattappana PS",
        houseOfficer: "Kutten Pilla",
        address: "Kattappana, Idukki",
        phone: 123456789,
        email: "kattappanaps@gmail.com",
        password: "kattappana@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "ZgmwDYlF64q8obQd85bA",
        stationName: "Vattappara PS",
        houseOfficer: "Kutten Pilla",
        address: "Vattappara, Thiruvananthapuram",
        phone: 123456789,
        email: "vattapparaps@gmail.com",
        password: "vattappara@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "zS7rBbIhJt3JENgBYrMu",
        stationName: "Vithura PS",
        houseOfficer: "Kutten Pilla",
        address: "Vithura, Thiruvananthapuram",
        phone: 123456789,
        email: "vithuraps@gmail.com",
        password: "vithura@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "zS9iIWJ2DMQvSItYvKOF",
        stationName: "Palluruthy PS",
        houseOfficer: "Kutten Pilla",
        address: "Palluruthy, Ernakulam",
        phone: 123456789,
        email: "palluruthyps@gmail.com",
        password: "palluruthy@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "ZULrXl0YXTDLm0QePG6V",
        stationName: "Kanjirapally PS",
        houseOfficer: "Kutten Pilla",
        address: "Kanjirapally, Kottayam",
        phone: 123456789,
        email: "kanjirapallyps@gmail.com",
        password: "kanjirapally@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "zvhA3q22fGi7Ixy6kO51",
        stationName: "Perumpavur PS",
        houseOfficer: "Kutten Pilla",
        address: "Perumpavur, Ernakulam",
        phone: 123456789,
        email: "perumpavurps@gmail.com",
        password: "perumpavur@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "zwLFLVgZ4DtsZKWY2ONm",
        stationName: "Wadakkanchery PS",
        houseOfficer: "Kutten Pilla",
        address: "Wadakkanchery, Thrissur",
        phone: 123456789,
        email: "wadakkancheryps@gmail.com",
        password: "wadakkanchery@1234",
        houseOfficerId: "null"
    },
    {
        placeId: "ZWqOzGTlXAf6es3WabxY",
        stationName: "Koothattukulam PS",
        houseOfficer: "Kutten Pilla",
        address: "Koothattukulam, Ernakulam",
        phone: 123456789,
        email: "koothattukulamps@gmail.com",
        password: "koothattukulam@1234",
        houseOfficerId: "null"
    }
];



const registerPoliceStations = async () => {
  try {
    for (const stationData of districtPlaces) {
      const { email } = stationData;

      // Check if police station email already exists before adding data
      const existingStationQuery = await getDoc(
        doc(db, "police_station_collection", email)
      );

      if (existingStationQuery.exists()) {
        console.log(`Police station with email ${email} already exists, skipping.`);
      } else {
        try {
          // Register user with email and password
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            stationData.password
          );

          // Get the user's UID
          const userId = userCredential.user.uid;

          // Add police station data to Firestore
          await setDoc(doc(db, "police_station_collection", userId), stationData);

          console.log(`Police station with email ${email} added successfully!`);
        } catch (error) {
          // Handle email-already-in-use error
          if (error.code === "auth/email-already-in-use") {
            console.log(`Email ${email} is already in use, skipping registration.`);
          } else {
            throw error; // Throw other errors
          }
        }
      }
    }
  } catch (error) {
    console.error("Error registering police stations:", error);
  }
};


  return (
    <div>
      <button onClick={registerPoliceStations}>Register Police Stations</button>
    </div>
  );
};

export default RegisterPoliceStations;
