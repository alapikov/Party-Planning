import React from "react";

export default function Table() {
    return (
        <div className="w-full">
            <table id="table">
                <thead>
                    <tr>
                        <th id="tableCellTL">Гость</th>
                        <th>Покупка</th>
                        <th id="tableCellTR">Стоимость</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro</td>
                        <td>Francisco</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Centro</td>
                        <td>Francisco</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Centro</td>
                        <td>Francisco</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Centro</td>
                        <td>Francisco</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Centro</td>
                        <td>Francisco</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Centro</td>
                        <td>Francisco</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td id="tableCellBL">Centro</td>
                        <td>Francisco</td>
                        <td id="tableCellBR">Mexico</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
