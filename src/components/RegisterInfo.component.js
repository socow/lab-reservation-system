import styled from 'styled-components';

export function RegisterInfo() {
  const checkOnlyOne = checkThis => {
    const checkboxes = document.getElementsByName('test');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <Container>
      <p>RegisterInfo</p>
      <Name>
        <input
          type="checkbox"
          name="test"
          value="1"
          onChange={e => checkOnlyOne(e.target)}
        />
        초진
        <br />
        <input
          type="checkbox"
          name="test"
          value="2"
          onChange={e => checkOnlyOne(e.target)}
        />
        재진
        <br />
        <input
          type="checkbox"
          name="test"
          value="3"
          onChange={e => checkOnlyOne(e.target)}
        />
        상담
        <br />
        <input
          type="checkbox"
          name="test"
          value="4"
          onChange={e => checkOnlyOne(e.target)}
        />
        서류
      </Name>
      <Type>type</Type>
    </Container>
  );
}

const Container = styled.button`
  border: 1px dashed white;
  background-color: green;
`;

const Name = styled.div``;

const Type = styled.div``;
