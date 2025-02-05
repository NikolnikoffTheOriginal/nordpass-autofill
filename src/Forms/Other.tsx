export const Other = () => (
  <form className="flex flex-col items-start ml-3" style={{ justifySelf: 'left'}}>
    <h1 className="text-4xl mb-3">Search</h1>
    <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter question..." />
    <button className="btn btn-outline mt-3" type="button">Search</button>
  </form>
);
