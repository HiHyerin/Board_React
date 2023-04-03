import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import Nav from "../main/Nav";
import {NavLink} from "react-router-dom";

function Detail(props){
    let {no} = useParams();
    const [boardDetail, setBoardDetail] = useState({});

    useEffect(()=>{
        axios.get('http://localhost/board/detail_react',{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setBoardDetail(response.data)
        })
    },[])



    return(
        <div className="container">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th width={"15%"} style={{"textAlign":"center"}}>번호</th>
                    <td>{boardDetail.no}</td>
                    <th width={"15%"} style={{"textAlign":"center"}}> 작성일</th>
                    <td>{boardDetail.regdate}</td>
                </tr>
                <tr>
                    <th style={{"textAlign":"center"}}>이름</th>
                    <td>{boardDetail.name}</td>
                    <th style={{"textAlign":"center"}}>조회수</th>
                    <td>{boardDetail.hit}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th style={{"textAlign":"center"}}>제목</th>
                    <td colSpan={4} style={{"textAlign":"left"}}>{boardDetail.subject}</td>
                </tr>
                <tr>
                    <td colSpan={4} style={{"textAlign":"left"}}>{boardDetail.content}</td>
                </tr>
                <tr>
                    <td colSpan="4" className="text-right">
                        <a className="btn btn-xs btn-danger">수정</a>
                        <a className="btn btn-xs btn-info">삭제</a>
                        <NavLink to={"/board/list"}  className="btn btn-xs btn-primary">목록</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Detail;