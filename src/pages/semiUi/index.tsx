import {
  Button,
  Toast,
  Space,
  Typography,
  Highlight,
  ImagePreview,
  Image,
  Popconfirm,
} from "@douyinfe/semi-ui";

import { IconLink } from "@douyinfe/semi-icons";
import { useMemo } from "react";
const Text = Typography.Text;

function SemiUI() {
  const sourceString =
    "从 Semi Design 到 Any Design快速定义你的设计系统，并应用在设计稿和代码中";
  const searchWords = ["设计系统"];

  const srcList = useMemo(() => {
    return [
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg",
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/sky.jpg",
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/greenleaf.jpg",
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/colorful.jpg",
    ];
  }, []);

  const onConfirm = () => {
    Toast.success("确认保存！");
  };

  const onCancel = () => {
    Toast.warning("取消保存！");
  };
  return (
    <div>
      <div>
        <Button onClick={() => Toast.warning({ content: "welcome" })}>
          Hello Semi
        </Button>
      </div>
      <Highlight sourceString={sourceString} searchWords={searchWords} />
      <Text type="secondary">Secondary</Text>
      <Text
        link={{ href: "https://semi.design/" }}
        icon={<IconLink />}
        underline
      >
        带下划线的网页链接
      </Text>

      <Popconfirm
        title="确定是否要保存此修改？"
        content="此修改将不可逆"
        onConfirm={onConfirm}
        onCancel={onCancel}
      >
        <Button>保存</Button>
      </Popconfirm>

      <div></div>
      <ImagePreview>
        {srcList.map((src, index) => {
          return (
            <Image
              key={index}
              src={src}
              width={200}
              alt={`lamp${index + 1}`}
              style={{ marginRight: 5 }}
            />
          );
        })}
      </ImagePreview>
      <Space vertical>
        <Button theme="solid" type="primary">
          按钮
        </Button>
        <Button theme="solid" type="primary">
          按钮
        </Button>
        <Button theme="solid" type="primary">
          按钮
        </Button>
        <Button theme="solid" type="primary">
          按钮
        </Button>
      </Space>
    </div>
  );
}

export default SemiUI;
