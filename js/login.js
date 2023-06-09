
// 로그인

const login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", function () {

    // 로그인 버튼 클릭
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const userId = document.getElementById("loginId").value;
    const password = document.getElementById("loginPwd").value;

    if (Array.isArray(storedUserData)) {
        const user = storedUserData.find((data) => data.userId === userId && data.userPw === password);
        if (user) {
            // 로그인 성공
            alert("로그인에 성공하였습니다.");

            // 사용자 ID를 sessionStorage에 저장
            sessionStorage.setItem('login_userId', userId);

            // index.html로 이동
            window.location.href = "../kh_front_project/index.html";

        } else {
            // 로그인 실패
            alert("사용자 ID와 비밀번호를 잘못 입력하셨습니다.");
        }
    }
});