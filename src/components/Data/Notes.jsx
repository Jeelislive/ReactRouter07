import React from 'react';


function Notes() {
    const files = [
        { id: 1, name: 'Document 1.pdf', size: '2.5 MB', link: 'https://drive.google.com/drive/folders/17GOLXdCbTF9tBJimMTa-Gl79V4_QMe5D?usp=sharing' },
        { id: 2, name: 'Document 2.pdf', size: '1.8 MB', link: 'https://example.com/document1' },
        { id: 3, name: 'Document 3.pdf', size: '3.2 MB', link: 'https://example.com/document1' },
        { id: 4, name: 'Document 4.pdf', size: '2.5 MB', link: 'https://example.com/document1' },
        { id: 5, name: 'Document 5.pdf', size: '1.8 MB', link: 'https://example.com/document1' },
        { id: 6, name: 'Document 6.pdf', size: '3.2 MB', link: 'https://example.com/document1' },
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
