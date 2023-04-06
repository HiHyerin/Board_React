import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Detail from "./Detail";
import {useParams} from "react-router";

function Update(props){
    let {no} = useParams();
    const [boardUpdate, setBoardUpdate] = useState({
        name: "",
        subject: "",
        content: "",
        pwd: ""
    });
    useEffect(()=>{
        console.log("useEffect하하")
        console.log("no-"+no)
        axios.get("http://localhost/board/update_react", {
                    params:{
                        no:no
                    }
                }
            )
            .then((response) => {
                console.log(response.data);
                setBoardUpdate(response.data)
            });
    },[no]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBoardUpdate((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const pageChange = ()=>{
        console.log(boardUpdate.no)
        window.location.href = "/board/detail/"+boardUpdate.no;

    }

    const updateOk = async (e) => {
        console.log("boardUpdqte="+boardUpdate)
        axios.post("http://localhost/board/updateOk_react",boardUpdate)
            .then((response)=>{
                console.log(response.data);
                window.location.href = "/board/detail/"+boardUpdate.no;
        })
    }

    return(
        <div className="wrapper row3">
            <main className="container clear">
                <form method="post" action="">
                    <table>
                        <tbody>
                        <tr>
                            <th className="text-right" width="15%">
                                이름
                            </th>
                            <td width="80%" style={{ paddingLeft: "12px" }}>
                                <input
                                    type="text"
                                    name="name"
                                    value={boardUpdate.name}
                                    size="30"
                                    className="input-sm"
                                    style={{ float: "left" }}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className="text-right" width="15%">
                                제목
                            </th>
                            <td width="80%">
                                <input
                                    type="text"
                                    name="subject"
                                    value={boardUpdate.subject}
                                    size="60"
                                    className="input-sm"
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className="text-right" width="15%">
                                내용
                            </th>
                            <td width="80%">
                  <textarea
                      rows="10"
                      cols="60"
                      name="content"
                      value={boardUpdate.content}
                      onChange={handleInputChange}
                  ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-right" width="15%">
                                비밀번호
                            </th>
                            <td width="80%" style={{ paddingLeft: "12px" }}>
                                <input
                                    type="password"
                                    name="pwd"
                                    size="15"
                                    className="input-sm"
                                    style={{ float: "left" }}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>&nbsp;</tr>
                        <tr>
                            <td colSpan="2" className="text-center">
                                <input
                                    type="button"
                                    value="글쓰기"
                                    className="btn btn-sm btn-danger"
                                    onClick={updateOk}
                                />

                                <a className="btn btn-sm btn-primary" onClick={()=>pageChange()}>
                                    취소
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </main>
        </div>
            
    )
}

export default Update;