export default function Footer({ data, setShowDetails }) {
    return (
      <footer>
        <p>Check out the characters:</p>
        <nav>
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {data.map((item) => (
              <li
                
                key={item.id}
                onClick={() => {
                  setShowDetails(item); 
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    );
  }
  