interface AsteriskIconProps {
  width?: number;
  height?: number;
  color?: string;
}

function AsteriskIcon( {width = 200, height = 200, color = 'white'} : AsteriskIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} transform="translate(50,50)">
        {/* Une seule branche épaisse avec un décalage vers le haut et rotation pour créer les 5 branches */}
        <rect x="-15" y="0" width="30" height="40" transform="rotate(0)" />
        <rect x="-15" y="0" width="30" height="40" transform="rotate(72)" />
        <rect x="-15" y="0" width="30" height="40" transform="rotate(144)" />
        <rect x="-15" y="0" width="30" height="40" transform="rotate(216)" />
        <rect x="-15" y="0" width="30" height="40" transform="rotate(288)" />
      </g>
    </svg>
  );
}

export default AsteriskIcon;
