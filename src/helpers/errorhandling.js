

const ErrorHandling = async (error) => {
   console.log(error)
    if(error.response.status === 404){
		window.NioApp.Toast(error.response.data.message, "warning");
    }else if(error.response.status === 403){
		window.NioApp.Toast(error.response.data.message, "warning");
    }else if(error.response.status === 500){
		window.NioApp.Toast(error.response.data.message, "error");
    }else{
		window.NioApp.Toast('An Error Occured', "warning");
    }

}

export default ErrorHandling