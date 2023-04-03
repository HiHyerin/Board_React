import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function List(){
    const [boardList, setBoardList] = useState([]);
    const [curpage, setCurpage] = useState(1);
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(0);
    const [totalpage,setTotalpage] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost/board/list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setBoardList(response.data)
        })
    },[])

    useEffect(()=>{
        axios.get('http://localhost/board/page_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    },{})
    /*==================================================================================*/
    const  pages=(page)=>{
        axios.get('http://localhost/board/list_react',{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setBoardList(response.data)
        })

        axios.get('http://localhost/board/page_react',{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })

    }
    const pagePrev=()=>{
        pages(startPage-1)
    }

    const pageNext=()=>{
        pages(endPage+1)
    }

    const pageChange=(page)=>{
        pages(page)

    }

    /*==================================================================================*/
    let html = boardList.map((board)=>
        <tr>
            <td style={{"width":"15%"}}>{board.no}</td>
            <td style={{"width":"50%","textAlign":"left"}}><NavLink to={"/board/detail/"+board.no}>{board.subject}</NavLink></td>
            <td style={{"width":"10%"}}>{board.name}</td>
            <td style={{"width":"15%"}}>{board.regdate}</td>
            <td style={{"width":"10%"}}>{board.hit}</td>
        </tr>
    )

    let row=[];
    if(startPage>1)
    {// 배열에 추가
        row.push( <li><a href="#" onClick={()=>pagePrev()}>&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i===curpage)
        {
            row.push(<li className="active" style={{"backgroundColor":"#D9D2E9"}}><a href={"#"} onClick={()=>pageChange(i)}> {i}</a></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href="#" onClick={()=>pageNext()}>Next &raquo;</a></li>)
    }

    /*==================================================================================*/
    return(
        <Fragment>
            <div style={{"textAlign":"right","paddingRight":"50px"}}>
                <button type={"button"} style={{"backgroundColor":"#D9D2E9","border":"none"}}><NavLink to={"/board/insert"}>새 글</NavLink></button>
            </div>

            <div className="row" style={{"padding":"50px", "paddingTop":"10px"}}>
                <table className="table">
                    <tbody>
                    <tr style={{"backgroundColor":"#D9D2E9"}}>
                        <th style={{"width":"15%", "textAlign":"center"}}>번호</th>
                        <th style={{"width":"50%", "textAlign":"center"}}>제목</th>
                        <th style={{"width":"10%", "textAlign":"center"}}>이름</th>
                        <th style={{"width":"15%", "textAlign":"center"}}>날짜</th>
                        <th style={{"width":"10%", "textAlign":"center"}}>조회수</th>
                    </tr>
                    {html}
                    </tbody>
                </table>
                <nav className="container">
                    <ul className="pagination">
                        {row}
                    </ul>
                </nav>

            </div>

        </Fragment>
    )

}
export default List;