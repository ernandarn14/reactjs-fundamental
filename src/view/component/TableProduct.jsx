import React from 'react'

const TableProduct = () => {
    let arr = [
        { nama: 'Larva', pekerjaan: 'Cartoonist' },
        { nama: 'Aku', pekerjaan: 'Developer' },
        { nama: 'Minion', pekerjaan: 'Actor' }
    ]

    const renderArr = () => {
        return (
            arr.map((val, idx) => (
                <tr>
                    <td>
                        {idx += 1}
                    </td>
                    <td>
                        {val.nama}
                    </td>
                    <td>{val.pekerjaan}</td>
                </tr>))
        )
    }
    return (
        <div>
            <table align='center'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {renderArr()}
                </tbody>

            </table>
        </div>
    )
}

export default TableProduct