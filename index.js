

const header = document.querySelector("h1").style.textAlign = "center";

const myStyle = document.querySelector("body").style;
myStyle.backgroundImage = "url('school.jpg')";
myStyle.backgroundRepeat = "no-repeat";
//myStyle.backgroundPosition = "center"
myStyle.backgroundSize = "cover";

const formStyle = document.querySelector("form").style;
formStyle.color = "#fff";
formStyle.fontWeight = "bold";

const forms = document.querySelector("form")
const successAlert = () => {
	if (forms.checkValidity())  {
		alert("Student Account Successfully Created");
		//window.location.href = "https://www.cam.ac.uk/";
	}
}
