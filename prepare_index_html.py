import argparse
import os
import string


DEFAULT_TEMPLATE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "template.html")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--template", type=str, default=DEFAULT_TEMPLATE_PATH)
    parser.add_argument("--title", type=str, required=True)
    parser.add_argument("--out", type=str, required=True)
    args = parser.parse_args()

    with open(args.template, "r") as template_file:
        template = template_file.read()

    template = string.Template(template)
    content = template.substitute(title=args.title)

    with open(args.out, "w") as out_file:
        out_file.write(content)


if __name__ == "__main__":
    main()
