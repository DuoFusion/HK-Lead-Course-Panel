import { Col } from "antd";
import { FormEvent, useEffect, useState } from "react";
import { Mutations, Queries } from "../../api";
import Information from "../../coreComponents/Information";

const PrivacyPolicyContainer = () => {
  const [editorContent, setEditorContent] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);

  const { mutate: usePrivacyPolicy, isPending: isPrivacyPolicyAdding } = Mutations.usePrivacyPolicy();
  const { data: PrivacyPolicy } = Queries.useGetPrivacyPolicy();
  const allPrivacyPolicyUs = PrivacyPolicy?.data;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      usePrivacyPolicy({ privacyPolicy: editorContent }, { onSuccess: () => setIsEditing(false) });
    } catch (error) {}
  };

  useEffect(() => {
    if (allPrivacyPolicyUs) {
      setEditorContent(allPrivacyPolicyUs?.privacyPolicy);
    }
  }, [allPrivacyPolicyUs]);

  return (
    <Col xl="12">
      <Information headerTitle="Privacy Policy" loading={isPrivacyPolicyAdding} editorContent={editorContent} setEditorContent={setEditorContent} handleSubmit={handleSubmit} isEditing={isEditing} setIsEditing={setIsEditing} />
    </Col>
  );
};

export default PrivacyPolicyContainer;
