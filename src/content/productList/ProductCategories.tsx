import * as React from 'react';
import {Accordion, AccordionDetails, AccordionSummary,Typography, List, ListItemButton, ListItemText }from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductCategories() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography>
          Graphics & Design
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton>
            <ListItemText primary="Logo & Brand Identity" />
          </ListItemButton>
          <ListItemButton >
            <ListItemText primary="Web & App Design" />
          </ListItemButton>
          <ListItemButton >
            <ListItemText primary="Art & Illustration" />
          </ListItemButton>
          <ListItemButton >
            <ListItemText primary="Marketing Design" />
          </ListItemButton>
          <ListItemButton>
          <ListItemText primary="Gaming" />
        </ListItemButton>
        <ListItemButton >
          <ListItemText primary="Visual Design" />
        </ListItemButton>
        <ListItemButton >
          <ListItemText primary="Print Design" />
        </ListItemButton>
        <ListItemButton >
          <ListItemText primary="Packaging & Covers" />
        </ListItemButton>
      </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header" >
          <Typography>Digital Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Search & Social" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Advertising & Content" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Industry & Purpose-specific" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Analytics & Strategy" />
            </ListItemButton>      
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header" >
          <Typography>Writing & Translation</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Content Writing & Editing" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Career Writing" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Storytelling" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Business Copy" />
            </ListItemButton>      
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel4bh-content"  id="panel4bh-header" >
          <Typography>Programming & Tech</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Websites" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Website Platforms" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Application Development" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Support & Cybersecurity" />
            </ListItemButton>      
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel5bh-content"  id="panel5bh-header" >
          <Typography>Business</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Business" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="General and Administrative" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Sales & Customer Care" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Miscellaneous" />
            </ListItemButton>      
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel6bh-content"  id="panel6bh-header" >
          <Typography>Lifestyle</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Self Improvement" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Leisure & Hobbies" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Wellness & Fitness" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Fashion & Style" />
            </ListItemButton>      
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}