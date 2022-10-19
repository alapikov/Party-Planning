import React, { useEffect, useState } from 'react';

export default function Table() {
    return (
        <div className='w-full'>
            <table id='table'>
                <tr>
                    <th className='tableHeadCell'>Company</th>
                    <th className='tableHeadCell'>Contact</th>
                    <th className='tableHeadCell'>Country</th>
                </tr>
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
            </table>
        </div>
    )
}