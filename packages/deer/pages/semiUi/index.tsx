import {
  Button,
  Toast,
  Space,
  Typography,
  Highlight,
  ImagePreview,
  Image,
  Popconfirm,
  Badge,
  Avatar,
  Divider,
  Empty,
  Tag,
  TagInput,
} from "@douyinfe/semi-ui";
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
import { IconLink, IconSemiLogo, IconLock } from "@douyinfe/semi-icons";
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
    Toast.success(`确认保存！
    `);
  };

  const onCancel = () => {
    Toast.warning("取消保存！");
  };

  const style = {
    width: "42px",
    height: "42px",
    borderRadius: "4px",
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
      <Divider layout="vertical" margin="12px" />

      <Divider margin="12px" align="left">
        这是居左文字
      </Divider>

      <Divider margin="12px" align="center">
        这是居中文字
      </Divider>

      <Divider margin="12px" align="right">
        这是居右文字
      </Divider>

      <Divider margin="12px">
        <IconSemiLogo />
      </Divider>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "30px",
        }}
      >
        <div>
          <Badge count={5}>
            <Avatar color="blue" shape="square" style={style}>
              BM
            </Avatar>
          </Badge>
        </div>
        <div>
          <Badge dot>
            <Avatar color="blue" shape="square" style={style}>
              YL
            </Avatar>
          </Badge>
        </div>
        <div>
          <Badge
            count={<IconLock style={{ color: "var(--semi-color-primary)" }} />}
          >
            <Avatar color="light-blue" shape="square" style={style}>
              XZ
            </Avatar>
          </Badge>
        </div>
        <div>
          <Badge count="NEW">
            <Avatar color="light-blue" shape="square" style={style}>
              WF
            </Avatar>
          </Badge>
        </div>
        <div>
          <Badge count={1000} overflowCount={999}>
            <Avatar color="green" shape="square" style={style}>
              TT
            </Avatar>
          </Badge>
        </div>
      </div>

      <Empty
        image={<IllustrationConstruction style={{ width: 100, height: 100 }} />}
        darkModeImage={
          <IllustrationConstructionDark style={{ width: 100, height: 100 }} />
        }
        title={"暂无数据"}
        description=""
      />

      <Popconfirm
        title="确定是否要保存此修改？"
        content="此修改将不可逆"
        onConfirm={onConfirm}
        onCancel={onCancel}
      >
        <Button>保存</Button>
      </Popconfirm>

      <div>
        <Space>
          <Tag> default tag </Tag>
          <Tag closable> Closable Tag </Tag>
          <Tag closable onClose={(value, e) => e.preventDefault()}>
            Closable Tag, Prevent Default
          </Tag>
        </Space>
      </div>

      <div>
        <TagInput
          defaultValue={["抖音", "火山", "西瓜视频"]}
          placeholder="请输入..."
          onChange={(v) => console.log(v)}
        />
        <TagInput
          separator={["-", "/", "|", "++"]}
          placeholder="支持多个分隔符进行批量输入"
          onChange={(v) => console.log(v)}
        />
      </div>

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

      <Space>
        <Button theme="solid" type="primary">
          按钮
        </Button>
        <Button theme="solid" type="danger">
          按钮
        </Button>
        <Button theme="solid" type="warning">
          按钮
        </Button>
        <Button theme="solid" type="secondary">
          按钮
        </Button>
        <Button theme="solid" type="tertiary">
          按钮
        </Button>
      </Space>
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
