import argparse
import datetime
import os
import string


DEFAULT_TEMPLATE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "template.html")


def create_meta_tags(data: dict[str, str]) -> str:
    data["build-date"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return "\n".join(f'<meta name="{key}" content="{value}">' for key, value in data.items())


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--template", type=str, default=DEFAULT_TEMPLATE_PATH)
    parser.add_argument("--title", type=str, required=True)
    parser.add_argument("--out", type=str, required=True)
    parser.add_argument("--meta", type=str, nargs="*", default=[])
    args = parser.parse_args()

    with open(args.template, "r") as template_file:
        template = template_file.read()

    metadata = dict()
    assert len(args.meta) % 2 == 0
    for i in range(0, len(args.meta), 2):
        key = args.meta[i]
        value = args.meta[i + 1]
        metadata[key] = value

    template = string.Template(template)
    content = template.substitute(title=args.title, meta=create_meta_tags(metadata))

    with open(args.out, "w") as out_file:
        out_file.write(content)


if __name__ == "__main__":
    main()
