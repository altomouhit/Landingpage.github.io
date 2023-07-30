const auth = new Auth();
document.querySelector(".logOut").addEventListener("click", (e) => {
	auth.logOut();
});