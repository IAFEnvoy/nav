export function Navigate({ data }) {
    return (<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(' + (data.minWidth ?? '200px') + ',1fr))' }}>
        {data.contents.map(d => {
            return (<div className="project">
                <div className="flex">
                    <div style={{ display: 'flex' }}>
                        <img src={d.image} style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }}></img>
                        &nbsp;
                        <h5 style={{ position: 'relative', top: '8px' }}><a href={d.link} target="_blank" rel="noopener noreferrer">{d.title}</a></h5>
                    </div>
                    <p>{d.content}</p>
                </div>
            </div>)
        })}
    </div>);
}