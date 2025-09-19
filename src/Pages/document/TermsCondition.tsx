import { Col } from "antd";
import { FormEvent, useEffect, useState } from "react";
import { Mutations, Queries } from "../../api";
import Information from "../../coreComponents/Information";

const TermsConditionContainer = () => {
  const [editorContent, setEditorContent] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);

  const { mutate: useTermsCondition, isPending: isTermsConditionAdding } = Mutations.useTermsCondition();
  const { data: TermsCondition } = Queries.useGetTermsCondition();
  const allTermsConditionUs = TermsCondition?.data;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      useTermsCondition({ termsCondition: editorContent }, { onSuccess: () => setIsEditing(false) });
    } catch (error) {}
  };

  useEffect(() => {
    if (allTermsConditionUs) {
      setEditorContent(allTermsConditionUs?.termsCondition);
    }
  }, [allTermsConditionUs]);

  return (
    <Col xl="12">
      <Information headerTitle="Terms Condition" loading={isTermsConditionAdding} editorContent={editorContent} setEditorContent={setEditorContent} handleSubmit={handleSubmit} isEditing={isEditing} setIsEditing={setIsEditing} />
    </Col>
  );
};

export default TermsConditionContainer;
