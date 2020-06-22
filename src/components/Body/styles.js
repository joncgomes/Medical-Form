import styled from 'styled-components';

export const Container = styled.div`

.container {
  margin: 5px auto 0;
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
}

.content > p {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 50px;
}

.content form {
  display: flex;
  flex-direction: column;
}

input[type="radio"] {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
}

.content form label {
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 8px;
}

.content form input {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
}

.form-group {
  display: inline;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

form fieldset {
		margin:15px;
		padding:10px;
	}
	form fieldset label {
		display:inline;
		float:left;
		width:100px;
		height:50px;
		line-height:40px;
		font-weight:normal;
		font-size:30%;
		color:#333;
		margin:1px 8px 0 0;
		overflow:hidden;
	}
	form fieldset label input {
		display:inline;
		float:left;
		width:auto;
		height:14px;
		line-height:15px;
		margin:0 3px 0 0;
		padding:0;
		border:none;
	}

.content button.btn {
  border: 0;
  border-radius: 2px;
  width: 20%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  align-self: center;
  cursor: pointer;  
}
`;
