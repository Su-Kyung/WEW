import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyDllg5mZcStQrJ4IW3icvJhpBgCXz67P1M",
    authDomain: "wewoo-4e68f.firebaseapp.com",
    databaseURL: "https://wewoo-4e68f.firebaseio.com",
    projectId: "wewoo-4e68f",
    storageBucket: "wewoo-4e68f.appspot.com",
    messagingSenderId: "937924001214",
    appId: "1:937924001214:web:8b8bafae54f52ccc5f8def",
    measurementId: "G-549WH4VYTG"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
const db = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };

export default db;