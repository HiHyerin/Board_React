import React, {Fragment, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Insert() {
    const [boardInsert, setBoardInsert] = useState({});

    useEffect(() => {
        const regdate = new Date();
        const formattedDate = regdate.toISOString().slice(0, 10);
        setBoardInsert((prevState) => ({ ...prevState, regdate: formattedDate }));
    }, []);

    const insert = async (e) => {
        e.preventDefault();
        console.log(boardInsert);
        await axios
            .post("http://localhost/board/insert_react", boardInsert)
            .then((response) => {
                console.log(response.data);
                setBoardInsert(response.data);
            });
    };

    const onChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setBoardInsert({ ...boardInsert, [name]: value });
        window.location.href
    };

    return (
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
                                    size="30"
                                    className="input-sm"
                                    style={{ float: "left" }}
                                    onChange={onChange}
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
                                    size="60"
                                    className="input-sm"
                                    onChange={onChange}
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
                      onChange={onChange}
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
                                    onChange={onChange}
                                />
                            </td>
                        </tr>
                        <tr>&nbsp;</tr>
                        <tr>
                            <td colSpan="2" className="text-center">
                                <input
                                    type="submit"
                                    value="글쓰기"
                                    className="btn btn-sm btn-danger"
                                    onClick={insert}
                                />

                                <NavLink
                                    to={"/board/list"}
                                    className="btn btn-sm btn-primary"
                                >
                                    취소
                                </NavLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </main>
        </div>
    );
}

export default Insert;