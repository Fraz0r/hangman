import Svg, { Circle, Line } from "react-native-svg";
import { useThemeColor, View } from "../Themed";
import { TGuessIndex } from "../../types/Game";

interface SceneProps {
  stage: TGuessIndex;
}

export default function Scene({ stage }: SceneProps) {
  const svgStroke = useThemeColor({}, 'svgStroke');
  const background = useThemeColor({}, 'background');

  const svgShapeProps = {
    stroke: svgStroke,
  };

  return (
    <View>
      <Svg viewBox="0 0 100 100" style={ { height: 200, marginTop: 15 } }>
        { /* Stage Left */ }
        <Line x1="5" y1="5" x2="5" y2="100" stroke={ svgStroke } strokeWidth="3" />
        { /* Stage Left-Brace */ }
        <Line x1="5" y1="90" x2="-10" y2="110" stroke={ svgStroke } strokeWidth="3" />
        { /* Stage Right-Brace */ }
        <Line x1="5" y1="90" x2="30" y2="110" stroke={ svgStroke } strokeWidth="3" />
        { /* Stage Top */ }
        <Line x1="3.5" y1="5" x2="75" y2="5" stroke={ svgStroke } strokeWidth="3" />
        { /* Stage Top-Brace */ }
        <Line x1="3.5" y1="15" x2="15" y2="5" stroke={ svgStroke } strokeWidth="3" />
        { /* Stage Rope */ }
        <Line x1="50" y1="5" x2="50" y2="35" stroke={ svgStroke } strokeWidth="1" />
        { /* Head */ }
        { stage >= 1 && (
          <Circle cx="50" cy="25" r="10" stroke={ svgStroke } strokeWidth="2" fill={ background } />
        ) }
        { /* Torso */ }
        { stage >= 2 && (
          <Line x1="50" y1="35" x2="50" y2="62" stroke={ svgStroke } strokeWidth="2" fill={ background } />
        ) }
        { /* Left Arm */ }
        { stage >= 3 && (
          <Line x1="50" y1="43" x2="30" y2="30" stroke={ svgStroke } strokeWidth="2" />
        ) }
        { /* Right Arm */ }
        { stage >= 4 && (
          <Line x1="50" y1="43" x2="70" y2="30" stroke={ svgStroke } strokeWidth="2" />
        ) }
        { /* Left Leg */ }
        { stage >= 5 && (
          <Line x1="50" y1="60" x2="30" y2="80" stroke={ svgStroke } strokeWidth="2" />
        ) }
        { /* Right Leg */ }
        { stage >= 6 && (
          <Line x1="50" y1="60" x2="70" y2="80" stroke={ svgStroke } strokeWidth="2" />
        ) }
      </Svg>
    </View>
  );
}
