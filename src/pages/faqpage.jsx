import {Accordion,AccordionSummary,AccordionDetails,Typography,Stack} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '../components/header'
import { useState } from 'react'

const FAQPage = () =>{

    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <div className="h-auto px-5 py-7">
            <Header title="FAQ" subTitle="Frequently Asked Questions Page" />

            <Stack direction={"column"} gap={2}>

                <Accordion defaultExpanded onChange={handleChange("panel1")}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>
                        General settings
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            
                <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography>Users</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat
                        lectus, varius pulvinar diam eros in elit. Pellentesque convallis
                        laoreet laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography>
                        Advanced settings
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
                        sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography>
                        Personal data
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
                        sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            
                <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>
                        General settings
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            
                <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography>Users</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat
                        lectus, varius pulvinar diam eros in elit. Pellentesque convallis
                        laoreet laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography>
                        Advanced settings
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
                        sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Stack>
        </div>
    )
}
export default FAQPage;