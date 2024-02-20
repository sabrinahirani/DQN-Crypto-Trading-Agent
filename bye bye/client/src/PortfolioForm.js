// TODO beautify form #1
// TODO input field is finnicky (form #2 for portfolio weights)
// TODO bar visual -> fixed size, round corners, etc.
// TODO add application logic

import { useState } from "react";
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, FormControl, FormLabel, FormErrorMessage, Input, useTheme } from "@chakra-ui/react";

function PortfolioForm() {
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [btcWeight, setBtcWeight] = useState(0);
  const [ethWeight, setEthWeight] = useState(0);
  const [xrpWeight, setXrpWeight] = useState(0);
  const [ltcWeight, setLtcWeight] = useState(0);
  const [dogeWeight, setDogeWeight] = useState(0);
  const [totalWeightError, setTotalWeightError] = useState("");

  const handleSliderChange = (value, setter) => {
    setter(value);
    const totalWeight = btcWeight + ethWeight + xrpWeight + ltcWeight + dogeWeight;
    if (totalWeight != 100) {
      setTotalWeightError("Total portfolio weight must be 100%");
    } else {
      setTotalWeightError("");
    }
  };

  const handleInputChange = (e, setter) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setter(newValue);
      setTotalWeightError("");
    }
  };

  return (
    <Box w="30%">
      <form>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>Portfolio Value:</FormLabel>
            <Input type="number" value={value} onChange={(e) => setValue(e.target.value)} width="80%" variant="flushed" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>Time Frame:</FormLabel>
            <Input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} width="80%" variant="flushed" />
          </div>
        </div>
      </form>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="1rem">
        <Box width={`${btcWeight}%`} height="10px" backgroundColor={theme.colors.orange[500]} />
        <Box width={`${ethWeight}%`} height="10px" backgroundColor={theme.colors.pink[500]} />
        <Box width={`${xrpWeight}%`} height="10px" backgroundColor={theme.colors.cyan[500]} />
        <Box width={`${ltcWeight}%`} height="10px" backgroundColor={theme.colors.blue[500]} />
        <Box width={`${dogeWeight}%`} height="10px" backgroundColor={theme.colors.yellow[500]} />
      </Box>
    <form>
      <FormControl isInvalid={totalWeightError !== ""}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>BTC</FormLabel>
            <Slider value={btcWeight} onChange={(value) => handleSliderChange(value, setBtcWeight)} width="80%" mr="3" colorScheme='orange'>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Input type="number" value={btcWeight} onChange={(e) => handleInputChange(e, setBtcWeight)} width="20%" variant="flushed" />
          </div>
          
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>ETH</FormLabel>
            <Slider value={ethWeight} onChange={(value) => handleSliderChange(value, setEthWeight)} width="80%" mr="3" colorScheme='pink'>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Input type="number" value={ethWeight} onChange={(e) => handleInputChange(e, setEthWeight)} width="20%" variant="flushed" />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>XRP</FormLabel>
            <Slider value={xrpWeight} onChange={(value) => handleSliderChange(value, setXrpWeight)} width="80%" mr="3" colorScheme='cyan'>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Input type="number" value={xrpWeight} onChange={(e) => handleInputChange(e, setXrpWeight)} width="20%" variant="flushed" />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>LTC</FormLabel>
            <Slider value={ltcWeight} onChange={(value) => handleSliderChange(value, setLtcWeight)} width="80%" mr="3" colorScheme="blue">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Input type="number" value={ltcWeight} onChange={(e) => handleInputChange(e, setLtcWeight)} width="20%" variant="flushed" />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>DOGE</FormLabel>
            <Slider value={dogeWeight} onChange={(value) => handleSliderChange(value, setDogeWeight)} width="80%" mr="3" colorScheme="yellow">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Input type="number" value={dogeWeight} onChange={(e) => handleInputChange(e, setDogeWeight)} width="20%" variant="flushed" />
          </div>
        </div>
        <FormErrorMessage>{totalWeightError}</FormErrorMessage>
      </FormControl>
    </form>
    </Box>
  );
}

export default PortfolioForm;
