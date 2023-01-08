import React from "react";

const UploadFiles = () => {

    const onChangeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log("dupa") //TODO dodanie setowania do usestate
        }
    }

    return (
        <div className={"pt-5"}>
            <h3 className="article-header">Zamówienie</h3>
            <label className={"file-upload w-100 d-flex justify-content-center align-items-center"}>
                <div>
                    <p>Prześlij pliki do wydruku</p>
                </div>
                <input type="file" onChange={onChangeFileHandler}
                       accept="image/png, image/jpeg"/>
            </label>
            <div className={"w-100 d-flex flex-row-reverse"}>
                <div>
                    <p>Akceptowane formaty plikow:</p>
                    <p className={"footer-subtext text-end"}>png, jpg</p>
                </div>
            </div>
        </div>)
}

export default UploadFiles;