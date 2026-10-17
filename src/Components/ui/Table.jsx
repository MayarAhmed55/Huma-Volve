import react from "react";

export default function Table({ 
    columns,
    data, 
    stripped=false
}) {
    return(
        <div className="overflow-x-auto shadow-md rounded-lg py-4 ">
        <table className="w-[50%] m-auto  bg-pink-100">
            <thead className="uppercase">
                <tr>  
                    {columns.map((column,index)=>(
                        <th key={index} className="px-6 py-3 text-left text-lg font-medium text-pink-500 uppercase tracking-wider">
                            {column}
                        </th>
                    ))}
                     </tr>
                </thead>

                <tbody className="text-blue-500">
                    {data.map((row,rowIndex)=>{
                        const isEven = rowIndex % 2 === 0;
                        const strippedRowClass = stripped && isEven ? 'bg-pink-300' : '';
                        return(
                            <tr key={rowIndex} className={`${strippedRowClass}`}>
                                {Object.values(row).map((value, cellIndex)=>(
                                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        );
                        
                    })}
                    </tbody>

                </table>
                </div>     
    )
}
