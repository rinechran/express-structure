class  Exception{
    constructor(what = "알수없는 오류가 발생하였습니다.") {
        this.message = what;
        this.status = 500;
    }
    what(req,res){
        return JSON.stringify({
            Error: this.message,
        });
    }

}

class  NotFindException extends Exception{
    constructor(what) {
        super(what)
    }
}

const ErrorHandling = (req, res, error)=>{
    if(error instanceof NotFindException ){
        res.status(404).send(error.what());
    }else if(error instanceof Exception){
        res.status(500).send(error.what());
    }
};

module.exports = {
    ErrorHandling,
    Exception,
    NotFindException
};

