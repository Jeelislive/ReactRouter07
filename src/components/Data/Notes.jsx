import React from 'react';


function Notes() {
    const files = [
        { id: 1, name: 'Discrete Mathematics', size: '2.5 MB', link: 'https://drive.google.com/drive/folders/17GOLXdCbTF9tBJimMTa-Gl79V4_QMe5D?usp=sharing' },
        { id: 2, name: 'Computer Organization & Architecture', size: '1.8 MB', link: 'https://drive.google.com/drive/folders/17EpTygE71lJ-nnySv2RJRw2cq8iVYWAN?usp=sharing' },
        { id: 3, name: 'Design Engineering – 1B', size: '3.2 MB', link: 'https://drive.google.com/drive/folders/17B7Tzir6YQkwgn2EKpj8e_-nzGUaa3LU?usp=sharing' },
        { id: 4, name: 'Object Oriented Programming -I', size: '2.5 MB', link: 'https://drive.google.com/drive/folders/17Bj0pV5Pj2mmCsbwITKSx5Xozio3QAfa?usp=sharing' },
        { id: 5, name: 'Object Oriented Programming -I', size: '1.8 MB', link: 'https://drive.google.com/drive/folders/17BY1X1OaPLV45s6Xd2Sf1HfEIWxznIjp?usp=sharing' },
        { id: 6, name: 'Principles of Economics & Management', size: '3.2 MB', link: 'https://drive.google.com/drive/folders/17GtwGiy6UTq_PvMh2n0eg2b5fZDPPY2u?usp=sharing' },
        { id: 7, name: 'Document 7.pdf', size: '3.2 MB', link: 'https://example.com/document1' },

    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow-sm py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl font-semibold">My Drive</h1>
                </div>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { files.map(file => (
                        <div key={ file.id } className="bg-white rounded-md p-4 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">{ file.name }</span>
                                <span className="text-gray-500">{ file.size }</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href={ file.link } target="_blank" rel="noopener noreferrer">
                                    <button className="text-blue-500 hover:text-blue-600">Open</button>
                                </a>
                            </div>
                        </div>
                    )) }
                </div>
            </main>
        </div>
    );
}

export default Notes;
