// AddTopicAndSubtopics.jsx

import React from "react";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";
import theme from "../../../../theme/Theme"
import {
    AddContainer,
    Heading,
    SectionHeader,
    SectionTitle,
    SubText,
    UploadManually,
    Label,
    TextInput,
    TextArea,
    UploadButton,
    CheckboxContainer,
    ConceptClarifierContainer,
    ClarifierHeading,
    ButtonRow,
    ActionButton,
    PaginationContainer,
    PaginationItem,
} from "../../../admin/pages/AddNewModule/AddNewModule.style";
import { FormGroup } from "../UploadModule/UploadModule.styles";
import { Form } from "react-router-dom";
const AddNewModule = () => {
  return (
    <AddContainer>
      {/* Page Heading */}
      <Heading>Add Topic 1 and subtopics</Heading>

    <FormGroup>
      <Label htmlFor="topicName">Topic 1 name</Label>
      <TextInput id="topicName" />
</FormGroup>
      {/* Skill Assessment Section */}
      <SectionHeader>
        <div>
          <SectionTitle
          style={{
            textAlign:"left",
          }}
          >Skill assessment questions for the entire topic</SectionTitle>
          <SubText>
            By default questions will be chosen from the question bank or if you wish to upload a file upload here
          </SubText>
        </div>
        <UploadManually
        style={{
            marginRight: "30px",
        }}
        >
                <FiUpload 
                style={{
                    paddingRight: "5px",
                }}
                />
            
             Upload manually</UploadManually>
      </SectionHeader>


      <div
      style={{
        border: `1px solid ${theme.colors.textgray}`,
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
      }}
      >
      <SectionTitle>Subtopic 1</SectionTitle>
      <FormGroup>
      <Label htmlFor="subtopicName">Subtopic 1 name</Label>
      <TextInput id="subtopicName"
      style={{
        backgroundColor: `theme.colors.primary`,
      }}
      />
      </FormGroup>
      <FormGroup>
      <Label htmlFor="subtopicContent">Subtopic 1 content</Label>
      <TextArea
        id="subtopicContent"
        rows="6"
       
      />
</FormGroup>

<FormGroup>
      <Label htmlFor="subtopicSummary">Subtopic 1 summary</Label>
      <TextArea
        id="subtopicSummary"
        rows="4"
      
      />
      </FormGroup>
      <FormGroup>
      <Label htmlFor="quickRevisePoints">Quickly revise points</Label>
      <TextArea
        id="quickRevisePoints"
        rows="4"
       
      />
      </FormGroup>

      <FormGroup>
      <Label>Upload cheat sheet</Label>
      <UploadButton>
        <FiUpload />
        Upload
      </UploadButton>
      </FormGroup>
      {/* Interview Favorite */}
      <CheckboxContainer>
        <input type="checkbox" id="favoriteSubtopic" />
        <label htmlFor="favoriteSubtopic">Mark this subtopic as Interview favorite</label>
      </CheckboxContainer>

      {/* Concept Clarifier */}
      <ConceptClarifierContainer>
        <ClarifierHeading>Concept clarifier</ClarifierHeading>
<FormGroup>
    
<Label htmlFor="conceptClarifier"

>Concept clarifier 1 (Enter a word or a phrase)</Label>
        <TextInput
          id="conceptClarifier"
          style={{
            backgroundColor: `${theme.colors.backgray}`,
          }}
        />
        </FormGroup>
        <FormGroup>

        <Label htmlFor="explanationOnHover">Explanation when hover</Label>
        <TextInput
          id="explanationOnHover"
          style={{
            backgroundColor: `${theme.colors.backgray}`,
          }}
        
        />
        </FormGroup>

<FormGroup>
        <Label htmlFor="moreExplanation">More explanation on popup</Label>
        <TextArea
          id="moreExplanation"
          rows="3"
          style={{
            backgroundColor: `${theme.colors.backgray}`,
          }}
       
        />
        </FormGroup>
      </ConceptClarifierContainer>

      {/* Question bank */}
      <SectionHeader>
        <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        >
        <SectionTitle>Question bank</SectionTitle>
        <UploadButton
        style={{
        marginTop: "10px",
        backgroundColor: `${theme.colors.backgray}`,
        }
        }
        >
          <FiUpload />
          Upload question bank
        </UploadButton>
        </div>
      </SectionHeader>

      {/* Try it yourself questions */}
      <SectionHeader>
        <div>
          <SectionTitle>Try it yourself questions</SectionTitle>
          <SubText>
            By default questions will be chosen from the question bank or if you wish to upload a file upload here
          </SubText>
        </div>
        <UploadManually
        style={{
          marginTop: "30px",
          marginRight: "30px",
        }}
        >
                <FiUpload 
                   style={{
                    paddingRight: "5px",
                }}
                />
            Upload manually</UploadManually>
      </SectionHeader>
      </div>
      {/* Add subtopic */}
      <ButtonRow>
        <ActionButton
        style={{
            border:"none",
        }}
        >+ Add subtopic</ActionButton>
      </ButtonRow>

      {/* Bottom Actions (Add Topic, Done) */}
      <ButtonRow>
        <ActionButton>+ Add Topic</ActionButton>
        <ActionButton variant="primary"
        style={{
            width:"100px"
        }}
        >Done</ActionButton>
      </ButtonRow>

      {/* Pagination */}
      <PaginationContainer>
        <ActionButton>Previous</ActionButton>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <ActionButton>Next</ActionButton>
      </PaginationContainer>
    </AddContainer>
  );
};

export default AddNewModule;
